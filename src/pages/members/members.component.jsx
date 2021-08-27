
import MemberContainer from '../../components/containers/member-containers/memberContainer';
import './members.styles.scss';

const Members = ()=> (
    <div className="descriptions-container">
        <div className="members-banner">
            <h1>SAD BOIS FOR LIFE</h1>
            <h2>人生の悲しいボア</h2>           
        </div>
        <div className="body">
            <MemberContainer />
        </div>
    </div>
);

export default Members;