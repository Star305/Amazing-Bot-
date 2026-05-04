import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'therapist',
  category: 'fun',
  description: 'therapist command',
  usage: 'therapist',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('therapist', ctx);
  }
};
