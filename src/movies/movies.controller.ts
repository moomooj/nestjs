import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie with a title made after : ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() moveData) {
    return moveData;
  }

  @Delete('/:id')
  remove(@Param('id') moveId: string) {
    return `This will delete a movie with ${moveId}`;
  }

  @Patch('/:id')
  patch(@Param('id') moveId: string, @Body() updateData) {
    return {
      updatedMovie: moveId,
      ...updateData,
    };
  }
}
