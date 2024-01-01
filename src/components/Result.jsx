import React, { useMemo } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function Result({ answers, restartQuiz, questions }) {
  console.log(answers, questions);
  const correctAnswers = useMemo(() => {
    return questions.filter((q, i) => {
      return q.answer == answers[i];
    }).length;
  }, [answers]);

  return (
    <Card variant="outlined" sx={{ pt: 3, pb: 3 }}>
      <CardContent>
        <Typography
          sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          variant="h4"
          color="text.secondary"
        >
          Result
        </Typography>
        {
          <Typography
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
            variant="h4"
            color="text.secondary"
          >
            {correctAnswers} / {questions.length}
          </Typography>
        }
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={restartQuiz} variant="outlined">
          Retry
        </Button>
      </CardActions>
    </Card>
  );
}
