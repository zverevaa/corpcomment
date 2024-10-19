import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
    const { upvoteCount, badgeLetter, company, text, daysAgo } = feedbackItem;
    const [open, setOpen] = useState(false);
    const [upvotesCount, setUpvotesCount] = useState(upvoteCount);

    const handleUpvote = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setUpvotesCount((prev) => ++prev);
        e.currentTarget.disabled = true;
        e.stopPropagation();
    };

    return (
        <li
            onClick={() => setOpen((prev) => !prev)}
            className={`feedback ${open ? "feedback--expand" : ""}`}
        >
            <button onClick={handleUpvote}>
                <TriangleUpIcon />
                <span>{upvotesCount}</span>
            </button>
            <div>
                <p>{badgeLetter}</p>
            </div>
            <div>
                <p>{company}</p>
                <p>{text}</p>
            </div>
            <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
        </li>
    );
}
