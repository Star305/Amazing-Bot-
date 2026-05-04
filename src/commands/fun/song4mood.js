import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'song4mood',
  category: 'fun',
  description: 'song4mood command',
  usage: 'song4mood',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('song4mood', ctx);
  }
};
