import { useEffect, useState } from 'react';
import { TFeedbackItem } from './types';

export const useFeedbackItems = () => {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
        const fetchFeedbackItems = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
                );

                if (!response.ok) {
                    throw new Error();
                }

                const data = await response.json();
                setFeedbackItems(data.feedbacks);
            } catch (error) {
                setErrorMessage(
                    "Something went wrong. Please try again later."
                );
            }
            setIsLoading(false);
        };

        fetchFeedbackItems();
    }, []);

	return {
		feedbackItems,
		setFeedbackItems,
		isLoading,
		errorMessage
	}
}