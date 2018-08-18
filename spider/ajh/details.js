const request = require('superagent');

const auth = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWpoLmFpaHVpc2hvdS5jb20vbWluaSIsImlhdCI6MTUzMDc3NzgyMSwiZXhwIjoxNTMwNzg1MDIxLCJuYmYiOjE1MzA3Nzc4MjEsImp0aSI6IndhREVQNmhFTTY1amJjRnkiLCJzdWIiOiJvNHY0STBkZG9PRzdVT19qQ2c0Nkl5bjJmbUhrIiwiaWQiOjM2MDI1NywibmFtZSI6bnVsbCwibW9iaWxlIjoiMTg4MjAxMjk2OTMiLCJvcGVuX2lkIjoibzR2NEkwZGRvT0c3VU9fakNnNDZJeW4yZm1IayIsInVuaW9uX2lkIjpudWxsLCJwYXNzd29yZCI6bnVsbCwiYXZhdGFyIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxOC0wNi0yNiAxMjowNDo0MCIsInVwZGF0ZWRfYXQiOiIyMDE4LTA2LTI2IDEyOjA0OjQwIiwiZGVsZXRlZF9hdCI6bnVsbH0.6Yq_GwTTVWLB49djXwWBO1Rk7KFoPaizEFQToIkGZvU';

const getDetails = async () =>
{
    const pid = 25827;
    let result = await request.get(`https://ajh.aihuishou.com/mini/products/${pid}/properties?self=0`)
        .set('authorization', auth);
    result = JSON.parse(result.text);
    const {code, data} = result;
    console.info('code: %d, data: %j', code, data);
};

getDetails();






