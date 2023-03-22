// Overidding constructor in subclass

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);

    this.isBusiness = isBusiness;
  }
}
