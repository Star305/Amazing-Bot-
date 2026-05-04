import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'plotwist',
  category: 'fun',
  description: 'plotwist command',
  usage: 'plotwist',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('plotwist', ctx);
  }
};
