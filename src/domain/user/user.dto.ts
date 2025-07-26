import { IsString } from 'class-validator';

export class GetUserDto {
  /**
   * The unique id of the user.
   * @example "1234"
   */
  @IsString()
  userId: string;
}
