import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'nightthoughts',
  category: 'fun',
  description: 'nightthoughts command',
  usage: 'nightthoughts',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('nightthoughts', ctx);
  }
};
