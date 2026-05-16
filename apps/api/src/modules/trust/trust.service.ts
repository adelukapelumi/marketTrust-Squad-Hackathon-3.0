import { Injectable } from '@nestjs/common';

@Injectable()
export class TrustService {
  getTrustSummary(userId: string) {
    return {
      user_id: userId,
      score: 55,
      band: 'BUILDING',
      explainers: [
        'Trust scores rely on verified payments and task behaviour.',
        'More verified activity improves score quality over time.',
      ],
    };
  }
}
