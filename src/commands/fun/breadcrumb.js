import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'breadcrumb',
  category: 'fun',
  description: 'breadcrumb command',
  usage: 'breadcrumb',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('breadcrumb', ctx);
  }
};
