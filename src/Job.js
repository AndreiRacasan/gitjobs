import React from 'react'
import { Card, Badge, Button} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
  return (
    <Card className="my-4 mx-auto shadow-sm border border-primary">
      <Card.Body>
        <div className="d-flex justify-content-center">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="primary" className="mr-2">{job.type}</Badge>
            <Badge variant="primary">{job.location}</Badge>
            <div style={{ wordBreak: 'break-all' }} className="mt-3">
              <ReactMarkdown source={job.description.slice(0,500) + '...'} />
            </div>
          </div>
        </div>
        <Card.Text>
          <Button href={job.url} target="_blank" className="mr-2">Full Details</Button>
          <Button href={job.url} target="_blank">Apply Here</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
