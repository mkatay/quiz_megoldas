import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function QuestionCard({question,shuffledOptions,currentIndex,submitAnswer}) {
 
  const [value, setValue] = useState(null);

  
  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  }
//console.log(shuffledOptions);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>

          <Typography variant="h5" component="div">
            Question {currentIndex}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {question}
          </Typography>

          <FormControl>
            <RadioGroup name="radio-group-quiz" value={value} onChange={(e)=>setValue(e.target.value)}>
              {shuffledOptions.map(o => 
                 <FormControlLabel key={o} value={o} 
                    control={<Radio />} label={o} />
              )}
            </RadioGroup>
          </FormControl>


        </CardContent>
        <CardActions>
          <Button disabled={!value} onClick={handleSubmit} fullWidth variant="outlined" size="small">Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
}