import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
export default function FeedbackList(){
	const { feedback } = useContext(FeedbackContext)
	if (!feedback || feedback === 0) {
		return <p>No feedbback!!</p>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item: any) => (
					<motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<FeedbackItem key={item.id} item={item}/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
