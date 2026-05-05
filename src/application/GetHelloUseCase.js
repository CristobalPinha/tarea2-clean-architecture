const Message = require('../domain/Message');

class GetHelloUseCase {
  execute() {
    return new Message("Hola mundo");
  }
}
module.exports = GetHelloUseCase;