import { frontendURL, conversationUrl } from '../URLHelper';

describe('#URL Helpers', () => {
  describe('conversationUrl', () => {
    it('should return direct conversation URL if activeInbox is nil', () => {
      expect(conversationUrl(undefined, 1)).toBe('conversations/1');
    });
    it('should return ibox conversation URL if activeInbox is not nil', () => {
      expect(conversationUrl(2, 1)).toBe('inbox/2/conversations/1');
    });
  });

  describe('frontendURL', () => {
    it('should return url without params if params passed is nil', () => {
      expect(frontendURL('main', null)).toBe('/app/main');
    });
    it('should return url without params if params passed is not nil', () => {
      expect(frontendURL('main', { ping: 'pong' })).toBe('/app/main?ping=pong');
    });
  });
});