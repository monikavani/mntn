import { Description } from '../Description/Description';
import { Heading } from '../Heading/Heading';
import { Number } from '../Number/Number';
import { Tagline } from '../Tagline/Tagline';
import { ReadMore } from '../ReadMore/ReadMore';
import styles from './Section.module.css';

export const Section = (props: {index: number, tagTitle: string, headTitle: string, paragraph: string, image: string, isLeft?: boolean }) => {
    return (
        <section className={`${styles.sectionWrap} ${props.isLeft ? styles.leftLayout : ''}`}>
            {/* Left section */}
            <div className={styles.left}>
                <Number index={props.index}/>
                <Tagline title={props.tagTitle}/>
                <Heading title={props.headTitle}/>
                <Description paragraph={props.paragraph}/>
                <ReadMore />
            </div>
            
            {/* Right section */}
            <div className={styles.right}>
                <img className={styles.sectionImage} src={props.image}/>
            </div>
        </section>
    );
}