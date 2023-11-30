// Import the necessary libraries
import kue from 'kue';

// Create a Kue queue
const queue = kue.createQueue();

// Create an object containing the job data
const jobData = {
  phoneNumber: '1234567890',
  message: 'This is the code to verify your account!',
};

// Create a job in the push_notification_code queue
const job = queue.create('push_notification_code', jobData);

// Handle job creation success event
job.on('complete', () => {
  console.log('Notification job completed');
});

// Handle job creation error event
job.on('failed', () => {
  console.log('Notification job failed');
});

// Save the job to the queue
job.save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  }
});

// Exit the process after a short delay
setTimeout(() => {
  process.exit(0);
}, 1000);

