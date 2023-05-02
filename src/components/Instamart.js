import { useState } from 'react';

const Section = ({title, description, isVisible, setIsVisible})=>{
    return (
        <div className='border border-black p-2 mb-3'>
            <h1 className='text-xl font-semibold mb-4'>{title}</h1>
            {isVisible ? 
                <>
                    <button className='text-lg font-semibold bg-pink-100 py-2 px-4 rounded-xl mb-3' onClick={setIsVisible}>Show less</button>
                    <p>{description}</p>
                </>
                :<button className='text-lg font-semibold bg-pink-100 py-2 px-3 rounded-xl mb-3' onClick={setIsVisible}>Show more</button> 
            }
        </div>
    )
}

const Instamart = ()=>{
    const [isVisibleSection, setIsVisibleSection] = useState('about');
    const handleClick = (value)=>{
        if(isVisibleSection === value){
            setIsVisibleSection('')
        }else{
            setIsVisibleSection(value)
        }
    }
    return (
        <div className='m-5'>
            <h1 className='text-3xl font-bold mb-4'>Instamart</h1>
            <Section 
                isVisible={isVisibleSection === 'about'} 
                setIsVisible={()=>handleClick('about')} 
                title={'About Instamart'} 
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}/>
            <Section 
                isVisible={isVisibleSection === 'team'} 
                setIsVisible={()=>handleClick('team')}
                title={'Team Instamart'} 
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}/>
            <Section 
                isVisible={isVisibleSection === 'carreers'}
                setIsVisible={()=>handleClick('carreers')} 
                title={'Carreers'} 
                description={'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'}/>
        </div>
    )
}

export default Instamart;