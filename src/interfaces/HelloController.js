const GetHelloUseCase = require('../application/GetHelloUseCase');

class HelloController {
  getHello(req, res) {
    const useCase = new GetHelloUseCase();
    const message = useCase.execute();
    res.status(200).json({ data: message.text });
  }
}
module.exports = HelloController;