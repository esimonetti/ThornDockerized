const chakram = require('chakram');
const expect = chakram.expect;

describe('httpbin basic tests', function() {
    it('should be able to get from httpbin', function*() {
        this.timeout(5000);

        this.url = process.env.THORN_SERVER_URL;

        response = yield chakram.get(this.url + '/get',
            {
                headers: {
                }
            }
        );

        console.log(response.body);

        expect(response).to.have.status(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.be.an('object');
        expect(response.body.args).to.be.empty;
        expect(response.body.args).to.be.an('object');
    });

    it('should be able to post to httpbin', function*() {
        this.timeout(5000);

        this.url = process.env.THORN_SERVER_URL;

        response = yield chakram.post(this.url + '/post',
            {
                'first': 'first value',
                'second': 'second value'
            },
            {
                headers: {
                    'Customheader': 'My Custom Value',
                    'Accept': 'application/json'
                }
            }
        );

        console.log(response.body);

        expect(response).to.have.status(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.be.an('object');
        expect(response.body.headers).to.not.be.empty;
        expect(response.body.headers).to.be.an('object');
        expect(response.body.headers.Customheader).to.be.equal('My Custom Value');
        expect(response.body.json).to.not.be.empty;
        expect(response.body.json).to.be.an('object');

/*
        response = yield chakram.get(this.url + '/get',
            {
                headers: {
                }
            }
        );

        expect(response).to.have.status(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.be.an('object');
*/
    });
});
