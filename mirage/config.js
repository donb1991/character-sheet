export default function() {
  this.timing = 400;

  this.post('/token', function() {
    return {
      access_token: '1234567890',
      email: 'don@fake.com',
      id: 1,
      username: 'Don'
    };
  });

  this.namespace = '/api/v1';

  this.get('/characters');
}
