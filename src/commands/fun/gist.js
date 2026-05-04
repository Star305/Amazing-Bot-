import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'gist',
  category: 'fun',
  description: 'gist command',
  usage: 'gist',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('gist', ctx);
  }
};
