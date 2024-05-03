import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9191/api/comments/${postId}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9191/api/comments", {
        content: newComment,
        postId,
      });
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to create comment:", error);
    }
  };

  const handleCommentEdit = (comment) => {
    setEditingComment(comment);
    setNewComment(comment.content);
  };

  const handleCommentUpdate = async (comment) => {
    try {
      const updatedComment = { ...comment, content: newComment };
      const response = await axios.put(
        `http://localhost:9191/api/comments/${comment.id}`,
        updatedComment
      );
      setComments(
        comments.map((c) => (c.id === response.data.id ? response.data : c))
      );
      setEditingComment(null);
      setNewComment("");
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  const handleCommentDelete = async (comment) => {
    try {
      await axios.delete(`http://localhost:9191/api/comments/${comment.id}`);
      setComments(comments.filter((c) => c.id !== comment.id));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <IconButton onClick={handleExpandClick}>
        <CommentIcon />
      </IconButton>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <Card>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <form onSubmit={handleCommentSubmit} style={{ display: "flex" }}>
              <TextField
                label="Add a comment..."
                variant="outlined"
                fullWidth
                value={newComment}
                onChange={handleCommentChange}
              />
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            </form>
            {comments.map((comment) => (
              <div key={comment.id}>
                {editingComment && editingComment.id === comment.id ? (
                  <>
                    <TextField
                      sx={{ mt: "20px" }}
                      label="Edit comment"
                      variant="outlined"
                      fullWidth
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleCommentUpdate(comment)}
                      sx={{ mt: 2, mr: 1 }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setEditingComment(null)}
                      sx={{ mt: 2 }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography sx={{ mt: "20px" }} variant="body1">
                      {comment.content}
                    </Typography>
                    <CardActions disableSpacing>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleCommentEdit(comment)}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleCommentDelete(comment)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </CardActions>
                  </>
                )}
              </div>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default CommentSection;
