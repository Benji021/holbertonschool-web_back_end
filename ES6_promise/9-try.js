export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Executing the mathFunction function and adding the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // In the event of an error, add the error message to the queue
    queue.push(error.message);
  } finally {
// Add the message 'Guardrail was processed' to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
