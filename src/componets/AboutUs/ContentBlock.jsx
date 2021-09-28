import React from 'react';

function ContentBlock(props) {
    const wrapperClass = props.wrapperClassName
    // const contentTitle = props.content.title
    const contentTitle = "Заголовок блока"
    const contentData = {title: contentTitle, text: [{id: 1, text: "hellow!!"}]}
    const renderImageBlock = (imageData) => {
        if (imageData != null && imageData?.img && imageData?.altText){
            return (
                <div className="content-block__image _ibg">
                    <picture><img src={props.image.img} alt={props.image.altText} /></picture>
                </div>
            ) 
        }
    }

    const renderTextBlock = (textData) => {
        if (textData != null && textData?.title && textData?.text){
            const textElements = textData.text.map(el => (
                <div className="text" key={el.id}>{el.text}</div>
            ))
            return (
                <div className="content-block__content text-content">
                    <div className="text-content__title">
                        <h4 className=" _title-standart">{textData.title}</h4>
                    </div>
                    <div className="text-content__article">
                        {textElements}
                    </div>
                </div>
            ) 
        }
    }

    return (
        <div className={`${wrapperClass} content-block`}>
            
            {renderImageBlock(props.image)}
            {renderTextBlock(contentData)}
            

        </div>
    );

    
}

export default ContentBlock;