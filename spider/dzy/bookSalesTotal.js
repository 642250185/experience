const _ = require('lodash');
const fs = require('fs-extra');
const request = require('superagent');
const config = require('../../config/index');
const sleep = require('js-sleep/js-sleep');
const {getHeader} = require('../../util/duozhuayuUtil');
const {formatDate} = require('../../util/dateUtil');
const xlsx = require('node-xlsx').default;

const {domain, booksDataPath, exportPath} = config.dzy;

let count = 0;
const getBookSalesTotal = async (book, page, sumList) =>
{
    try {
        let path = page;
        if(count === 0){
            sumList = [];
            path = `${domain}/api/books/${book.id}/sellers`;
        }
        await sleep(1000 * 3);
        console.info(`bookId:　${book.id} >> ${path}`);
        let result = await request.get(path).set(getHeader());
        result = JSON.parse(result.text);
        const {paging, data} = result;
        const soldBooksCountList = [];
        for(let obj of data){
            soldBooksCountList.push(obj.soldBooksCount);
        }
        sumList = sumList.concat(soldBooksCountList);
        if(paging.next){
            count++;
            const page = paging.next;
            return await getBookSalesTotal(book, page, sumList);
        } else {
            count = 0;
            book.salesTotal = _.sum(sumList);
            return book;
        }
    } catch (e) {
        console.error(e);
        count = 0;
        return {};
    }
};


const getAllBookSalesTotal = async () =>
{
    try {
        let count = 0;
        const books = JSON.parse(fs.readFileSync(booksDataPath));
        console.info('书籍总数: %d ', books.length );
        const booksList = [];
        for(let book of books){
            console.info(`第 ${++count} 本, bookId: ${book.id}, title: ${book.title}`);
            const _book = await getBookSalesTotal(book);
            console.info('_book: %j', _book);
            booksList.push(_book);
        }
        return booksList;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const exportExcel = async () =>
{
    try {
        const books = await getAllBookSalesTotal();
        const dzyBookList = [['组ID', '组名称', '类别ID', '类别名称','书籍ID','书籍名称','出版社','ISBN','豆瓣评分','作者','价格', '销售总量']];
        for(let item of books){
            const row = [];
            row.push(item.groupId);
            row.push(item.group);
            row.push(item.categoryId);
            row.push(item.categroyName);
            row.push(item.id);
            row.push(item.title);
            row.push(item.publisher);
            row.push(item.isbn);
            row.push(item.doubanRating);
            row.push(item.author);
            row.push(item.price);
            row.push(item.salesTotal);
            dzyBookList.push(row);
        }
        const currentTime = formatDate(new Date(), 'YYYY-MM-DD-HH');
        const filename = `${exportPath}/salesTotal-${currentTime}.xlsx`;
        console.info('filename: ', filename);
        fs.writeFileSync(filename, xlsx.build([
            {name: '多抓鱼书籍销售', data: dzyBookList},
        ]));
        console.log(`爬取结束, 成功导出文件: ${filename}`);
    } catch (e) {
        console.error(e);
        return e;
    }
};

const test = async () =>
{

    // const book = {
    //     "groupId": "135481276831369709",
    //     "group": "多抓鱼味的推荐",
    //     "categoryId": "135481276860730989",
    //     "categroyName": "豆瓣 8.5",
    //     "id": "72997775532363500",
    //     "title": "沉思录",
    //     "publisher": "中央编译出版社",
    //     "isbn": "9787802116290",
    //     "doubanRating": 8.5,
    //     "author": "马可奥勒留",
    //     "price": "6.90"
    // };
    //
    // const _book = await getBookSalesTotal(book);
    // console.info('_book: ', _book);

    await exportExcel();
};

test();

