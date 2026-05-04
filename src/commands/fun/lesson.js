import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'lesson',
  category: 'fun',
  description: 'lesson command',
  usage: 'lesson',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('lesson', ctx);
  }
};
