import { useState } from "react";

import saddestboiImg from '../../../assets/images/members-images/member1.jpg';
import sadboibadboiImg from '../../../assets/images/members-images/member2.jpg';
import sadboigirl from '../../../assets/images/members-images/member3.jpg';

import './member-containers.styles.scss';

const MemberContainer = () => {
    const [members, setMembers] = useState(
        [
            {
                memberName: 'SADDEST BOI',
                nameInJapanese: '悲しい少年',
                description: <p>The founder of Sad Bois wept his way to stardom from humble beginnings. It was while scraping pickles off the Frankston McDonalds ceiling that he wrote what was to become their debut single 'Everyday is Sad Boi Hour'.<br />Five years and 6 albums later he is now recognised as the most successful and melancholy Sad Boi that has ever been.</p>,
                imageUrl: saddestboiImg,
                id: 'saddestboi'
            },
            {
                memberName: 'SADBOIBADBOI',
                nameInJapanese: '悲しい少年悪い少年',
                description: <p>SBBB began his career as one of jung leans backup singers but things between them turned sour after the star made friends with one of the Depressed Boys.<br />He met Saddestboi while reaching for the same bottle of Arizona iced tea, the two fought at first but quickly realised the pure sad boi in the other and decided to form the group.</p>,
                imageUrl: sadboibadboiImg,
                id: 'sadboibadboi'
            },
            {
                memberName: 'SADBOIGIRL',
                nameInJapanese: '悲しい少年少女',
                description: <p>ex girlfriend of sadboibadboi's 'herbal Consultant' and newest member, this saddest of girls has quickly become a fan favourite.</p>,
                imageUrl: sadboigirl,
                id: 'sadboigirl'
            }
        ]
    );
    console.log(members[0].memberName.toLowerCase());

    return (
        <div className="members-container">
            {members.map(({ memberName, nameInJapanese, description, imageUrl, id }) => (
                <div
                    className='bio-container'
                    style={{
                        
                        backgroundImage: `url(${imageUrl})`
                    }}
                    id={`${id}-bio`}
                    key={`${id}-id`}
                >
                    <div className="bio-text-container" id={`${id}-text`}>
                        <h1>{memberName}</h1>
                        <h2>{nameInJapanese}</h2>
                        {description}
                    </div>
                </div>
            ))}
        </div>
    )


};

export default MemberContainer;