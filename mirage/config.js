export default function() {
  this.timing = 400;

  this.post('/token', function() {
    return {
      access_token: '1234567890',
      id: 1,
      username: 'Don',
      email: 'don@fake.com'
    };
  });

  this.namespace = '/api/v1';

  this.get('/characters');
}
