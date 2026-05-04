import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'situationship',
  category: 'fun',
  description: 'situationship command',
  usage: 'situationship',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('situationship', ctx);
  }
};
