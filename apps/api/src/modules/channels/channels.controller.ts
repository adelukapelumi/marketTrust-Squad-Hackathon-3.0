import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UssdSessionDto } from './dto/ussd-session.dto';
import { ChannelsService } from './channels.service';

@ApiTags('Channels')
@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post('ussd')
  handleUssd(@Body() dto: UssdSessionDto) {
    return this.channelsService.handleUssdSession(dto);
  }
}
