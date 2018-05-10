export default function() {
  this.timing = 400;

  this.post('/token', function(schema) {
    const currentUser = schema.users.create({
      username: 'Don'
    });
    return {
      access_token: '1234567890',
      email: 'don@fake.com',
      id: currentUser.id,
      username: currentUser.username
    };
  });

  this.namespace = '/api/v1';

  this.get('users/:id', function(schema, request) {
    let id = request.params.id;
    let user = schema.users.find(id);
    if(user) {
      return user;
    }

    return schema.users.create({ id, username: 'Don' });
  });
  this.get('/characters');
  this.post('/characters');
  this.post('/characters', (schema, request) => {
    return schema.characters.create(JSON.parse(request.requestBody).attributes);
  });
}
