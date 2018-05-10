export default function() {
  this.timing = 400;

  this.post('/token', function() {
    return {
      authToken: '1234567890',
      username: 'Don',
      email: 'don@fake.com'
    }
  });

  this.namespace = '/api/v1';
}
