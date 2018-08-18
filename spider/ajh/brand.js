const request = require('superagent');

const auth = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWpoLmFpaHVpc2hvdS5jb20vbWluaSIsImlhdCI6MTUzMDc3NjU2MCwiZXhwIjoxNTMwNzgzNzYwLCJuYmYiOjE1MzA3NzY1NjAsImp0aSI6ImMzbVVlN3liaEpzc0x5YXAiLCJzdWIiOiJvNHY0STBkZG9PRzdVT19qQ2c0Nkl5bjJmbUhrIiwiaWQiOjM2MDI1NywibmFtZSI6bnVsbCwibW9iaWxlIjoiMTg4MjAxMjk2OTMiLCJvcGVuX2lkIjoibzR2NEkwZGRvT0c3VU9fakNnNDZJeW4yZm1IayIsInVuaW9uX2lkIjpudWxsLCJwYXNzd29yZCI6bnVsbCwiYXZhdGFyIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxOC0wNi0yNiAxMjowNDo0MCIsInVwZGF0ZWRfYXQiOiIyMDE4LTA2LTI2IDEyOjA0OjQwIiwiZGVsZXRlZF9hdCI6bnVsbH0.p1BrQkJ7G1YgWm6Z1WjST521PAIbnyVMq3aEpeIw9IU';

const auth2 = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWpoLmFpaHVpc2hvdS5jb20vbWluaSIsImlhdCI6MTUzMDk1MTgwNywiZXhwIjoxNTMwOTU5MDA3LCJuYmYiOjE1MzA5NTE4MDcsImp0aSI6IjYybUM4ZFZ6RGhpY3V0NE8iLCJzdWIiOiJvNHY0STBlM2VQUFAySGhLOTB1Q2dTa0k1TVJBIiwiaWQiOjM5MDgwMiwibmFtZSI6bnVsbCwibW9iaWxlIjoiMTg3MjEzNzA4MTYiLCJvcGVuX2lkIjoibzR2NEkwZTNlUFBQMkhoSzkwdUNnU2tJNU1SQSIsInVuaW9uX2lkIjpudWxsLCJwYXNzd29yZCI6bnVsbCwiYXZhdGFyIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxOC0wNy0wMyAxNzoxOToyOSIsInVwZGF0ZWRfYXQiOiIyMDE4LTA3LTAzIDE3OjE5OjI5IiwiZGVsZXRlZF9hdCI6bnVsbH0.1AgBGI9vPFBJ9JxZ-gIFEvukoyvQps78iiikl8cN-kA';

const getBrand = async () =>
{
    const brands = [];
    let result = await request.get('https://ajh.aihuishou.com/mini/categories/1/brands')
        .set('authorization', auth2);
    result = JSON.parse(result.text);
    const {code, data} = result;
    console.warn('code: %d', code);
    for(let brand of data){
        brands.push({
            bid: brand.id,
            name: brand.name
        })
    }
    return brands;
};


// getBrand();

(async () =>{
    for(let i = 0; i<1; i++){
        const bids = await getBrand();
        console.info('i : %d, bids.size: %d, bids: %j', i, bids.length, bids);
    }
})();









































