import { Injectable } from '@nestjs/common';

import { UssdSessionDto } from './dto/ussd-session.dto';

@Injectable()
export class ChannelsService {
  handleUssdSession(dto: UssdSessionDto) {
    const text = dto.text?.trim() ?? '';

    if (!text) {
      return {
        session_id: dto.session_id,
        response: [
          'CON Welcome to MarketTrust',
          '1. Register business',
          '2. Check sales',
          '3. Request worker',
          '4. Confirm task',
          '5. Trust level',
        ].join('\n'),
      };
    }

    const path = text.split('*');
    const choice = path[0];

    switch (choice) {
      case '1':
        return {
          session_id: dto.session_id,
          response: 'END Business registration request received. A follow-up prompt will continue shortly.',
        };
      case '2':
        return {
          session_id: dto.session_id,
          response: 'END Sales summary is currently in mock mode for Sprint 1.',
        };
      case '3':
        return {
          session_id: dto.session_id,
          response: 'END Worker request captured. Task must be funded before matching.',
        };
      case '4':
        return {
          session_id: dto.session_id,
          response: 'END Task confirmation flow captured. Verification module will process this in next sprint.',
        };
      case '5':
        return {
          session_id: dto.session_id,
          response: 'END Trust level is currently in mock mode for Sprint 1.',
        };
      default:
        return {
          session_id: dto.session_id,
          response: 'END Invalid option. Please dial again and choose a valid menu item.',
        };
    }
  }
}
