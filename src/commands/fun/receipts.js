import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'receipts',
  category: 'fun',
  description: 'receipts command',
  usage: 'receipts',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('receipts', ctx);
  }
};
