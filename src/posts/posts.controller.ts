import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {

  @Get()
  @ApiOperation({ summary: '显示文章列表'})
  index() {
    return []
  }

  @Post()
  create() {
    return {
      success: true
    }
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title: 'Hello'
    }
  }
}
