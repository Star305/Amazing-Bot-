import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'broke',
  category: 'fun',
  description: 'broke command',
  usage: 'broke',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('broke', ctx);
  }
};
