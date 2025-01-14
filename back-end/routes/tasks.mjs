/**
 * These are the routes for the /tasks page on the front-end.
 */
import express from 'express'

const tasksRouter = express.Router()

const daysAgo = days => {
    const d = new Date()
    d.setDate(d.getDate() + days)
    return d
}

const sampleTasks = [
    { id: 1, title: 'Finish essay', dueDate: daysAgo(-2), status: 'NOT_STARTED', badges: [{ id: 1, color: '#ff5733', text: 'School' }, { id: 2, color: '#4f2f4f', text: 'Writing' }] },
    { id: 2, title: 'Buy groceries', dueDate: daysAgo(2), status: 'IN_PROGRESS', badges: [{ id: 3, color: '#00bfff', text: 'Shopping' }] },
    { id: 3, title: 'Clean bathroom', dueDate: daysAgo(7), status: 'COMPLETED', badges: [{ id: 4, color: '#008000', text: 'Cleaning' }, { id: 9, color: '#8b4513', text: 'Home' }] },
    { id: 4, title: 'Call grandma', dueDate: daysAgo(3), status: 'NOT_STARTED', badges: [{ id: 5, color: '#ffd700', text: 'Family' }] },
    { id: 5, title: 'Attend meeting', dueDate: daysAgo(1), status: 'IN_PROGRESS', badges: [{ id: 6, color: '#ffa500', text: 'Work' }, { color: '#ff69b4', text: 'Meeting' }] },
    { id: 6, title: 'Go for a run', dueDate: daysAgo(4), status: 'COMPLETED', badges: [{ id: 7, color: '#ff1493', text: 'Exercise' }] },
    { id: 7, title: 'Pay rent', dueDate: daysAgo(10), status: 'NOT_STARTED', badges: [{ id: 8, color: '#ff0000', text: 'Bills' }, { id: 9, color: '#8b4513', text: 'Home' }] },
    { id: 8, title: 'Read book', dueDate: daysAgo(6), status: 'IN_PROGRESS', badges: [{ id: 10, color: '#9400d3', text: 'Leisure' }, { color: '#4169e1', text: 'Reading' }] },
    { id: 9, title: 'Take out trash', dueDate: daysAgo(2), status: 'COMPLETED', badges: [{ id: 4, color: '#008000', text: 'Cleaning' }, { id: 9, color: '#8b4513', text: 'Home' }] },
    { id: 10, title: 'Finish project', dueDate: daysAgo(8), status: 'NOT_STARTED', badges: [{ id: 6, color: '#ffa500', text: 'Work' }, { id: 1, color: '#ff5733', text: 'School' }] }
]

tasksRouter.get('/tasks', async (req, res) => {
    try {
        res.json({
            tasks: sampleTasks
        })
    } catch (err) {
        console.error(err)
        res.status(400).json({
            error: err,
            status: 'failed to retrieve tasks from the database'
        })
    }
})

export default tasksRouter
