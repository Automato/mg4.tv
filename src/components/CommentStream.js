import { connect } from 'react-redux';

import CommentList from './CommentList';

const getVisibleComments = (comments, currentTime) => {
  return comments
    .filter((streamedComment) => (currentTime >= streamedComment.time))
    .map((streamedComment) => (streamedComment.comment));
};

const mapStateToProps = (state) => {
  return {
    comments: getVisibleComments(state.commentStream, state.videoContainer.currentTime),
  };
};

const CommentStream = connect(
  mapStateToProps
)(CommentList);

export default CommentStream;
