import React from 'react'

const TextInput = React.forwardRef (
            (
                { type, placeholder, styles, label, labelStyles, register, name, error }
            ) => {
        return (
            <div className="w-full flex flex-col mt-2 ">
                {label && 
                    (
                        <p className={`text-ascent-2 text-sm mb-2 ${labelStyles}`}>
                            {label}
                        </p>
                    )
                }

                <div className="">
                    <input type="text" />
                </div>
            </div>
            
        )
    }
)

export default TextInput