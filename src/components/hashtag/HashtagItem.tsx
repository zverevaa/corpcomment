type THashtagItemProps = {
    company: string;
    onSelectCompany: (company: string) => void;
};

export default function HashtagItem({
    company,
    onSelectCompany,
}: THashtagItemProps) {
    return (
        <li>
            <button onClick={() => onSelectCompany(company)}>#{company}</button>
        </li>
    );
}
