import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimStringsPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata): unknown {
    if (metadata.type !== 'body' || typeof value !== 'object' || value === null) {
      return value;
    }

    for (const [key, fieldValue] of Object.entries(value as Record<string, unknown>)) {
      if (typeof fieldValue === 'string') {
        (value as Record<string, string>)[key] = fieldValue.trim();
      }
    }

    return value;
  }
}
