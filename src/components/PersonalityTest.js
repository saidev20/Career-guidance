import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './PersonalityTest.css';

const sampleQuestions = [
  {
    id: 1,
    question: "How do you prefer to work?",
    options: ["Independently", "In a team", "Both", "Doesn't matter"]
  },
  {
    id: 2,
    question: "What motivates you the most?",
    options: ["Money", "Recognition", "Impact", "Personal growth"]
  },
  {
    id: 3,
    question: "How do you approach problems?",
    options: ["Logically", "Creatively", "Practically", "Emotionally"]
  }
];

const PersonalityTest = () => {
  const [responses, setResponses] = useState({});
  
  const handleOptionChange = (questionId, option) => {
    setResponses({
      ...responses,
      [questionId]: option,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Responses: ", responses);
    // You can send the responses to the backend here
    alert("Test submitted successfully!");
  };

  return (
    <Container className="personality-test-container">
      <h1 className="mb-4">Personality Test</h1>
      <Form onSubmit={handleSubmit}>
        {sampleQuestions.map((question) => (
          <div key={question.id} className="mb-4">
            <h5>{question.question}</h5>
            {question.options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`question-${question.id}-option-${index}`}
                name={`question-${question.id}`}
                label={option}
                value={option}
                onChange={() => handleOptionChange(question.id, option)}
                checked={responses[question.id] === option}
              />
            ))}
          </div>
        ))}

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default PersonalityTest;
