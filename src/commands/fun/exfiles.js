import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'exfiles',
  category: 'fun',
  description: 'exfiles command',
  usage: 'exfiles',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('exfiles', ctx);
  }
};
