import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ds() {
  return (
    <div className='ds'>
      <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg" />
      <Card.Body>
        <Card.Title>Introduction of Data Science</Card.Title>
        <Card.Text>
        Data science is an in-demand career path for people with an aptitude for research, programming, math, and computers.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i0.wp.com/youthopportunitieshub.com/wp-content/uploads/2020/07/dataanalysisistockrobuart.jpg?fit=1200%2C1034&ssl=1" />
      <Card.Body>
        <Card.Title>Data Analysis</Card.Title>
        <Card.Text>
        Data analytics is the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision making.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.hicFMnjJf8GyP0sleHrTbAHaE-&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
        Python is a programming language widely used by Data Scientists.Python has in-built mathematical libraries and functions, making it easier to calculate mathematical problems and to perform data analysis. 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://1.bp.blogspot.com/-botHQyeq3I4/X930vSqyUMI/AAAAAAAAaOc/84v6mUy6zCwI79X6j5UhVrL7B1pyRz2fwCLcBGAsYHQ/w1200-h630-p-k-no-nu/sql-1.png" />
      <Card.Body>
        <Card.Title>Database</Card.Title>
        <Card.Text>
        SQL is a standard database language used to communicate with databases more briefly it is used to access and manipulate database data.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='text-start' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://aceresearchsystem.com/wp-content/uploads/2020/05/20191218181212-Ent-Excel.jpeg" />
      <Card.Body>
        <Card.Title>Excel</Card.Title>
        <Card.Text>
        SQL is a standard database language used to communicate with databases more briefly it is used to access and manipulate database data.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Ds