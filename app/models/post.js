var Post = DS.Model.extend({

  blog_id: DS.attr('number'),

  title: DS.attr('string'),

  has_prev_post: DS.attr('boolean'),

  prev_post_id: DS.attr('number'),

  has_next_post: DS.attr('boolean'),

  next_post_id: DS.attr('number'),

  summary: DS.attr('string'),

  remaining: DS.attr('string'),

  created_at: DS.attr('date'),

  last_modified_at: DS.attr('date')

});

export default Post;

