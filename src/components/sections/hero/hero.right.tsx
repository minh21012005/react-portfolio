import './hero.scss';

const HeroRight = () => {

    return (
        <div className='hero-right'>
            <div className='border-top'></div>
            <div className='first'>
                <div className='circle bg-first'></div>
                <div className='circle bg-second'></div>
                <div className='circle bg-third'></div>
            </div>
            <div className='second'>
                <code className="text-white-0">
                    <div>
                        <span className="me-2 text-pink-100">const</span>
                        <span className="me-2">developer</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span>{'{'}</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2">name:</span>
                        <span className='text-yellow-500'>
                            {`'`}Nguyễn Bá Minh{`',`}
                        </span>
                    </div>
                    <div className="ms-4 me-2 text-pink-200">
                        <span className="text-white-0">skills:</span>
                        <span>{` ['`}</span>
                        <span>React</span>
                        <span>{`', '`}</span>
                        <span>Spring Boot</span>
                        <span>{`', '`}</span>
                        <span>Java</span>
                        <span>{`', '`}</span>
                        <span>TypeScript</span>
                        <span>{`', '`}</span>
                        <span>JavaScript</span>
                        <span>{`', '`}</span>
                        <span>HTML</span>
                        <span>{`', '`}</span>
                        <span>CSS</span>
                        <span>{`', '`}</span>
                        <span>SQL Server</span>
                        <span>{`', '`}</span>
                        <span>MySQL</span>
                        <span>{`', '`}</span>
                        <span>Git</span>
                        <span>{`', '`}</span>
                        <span>Bootstrap</span>
                        <span>{`', '`}</span>
                        <span>Postman</span>
                        <span>{`', '`}</span>
                        <span>Figma</span>
                        <span>{`', '`}</span>
                        <span>REST API</span>
                        <span>{`']`}</span>
                    </div>
                    <div>
                        <span className="ms-4  me-2 ">hardWorker:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4  me-2 ">quickLearner:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2 ">problemSolver:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2 text-green-700">hireable:</span>
                        <span className="text-red-500">function</span>
                        <span>{'() {'}</span>
                    </div>
                    <div>
                        <span className="ms-5 me-2 text-red-500">return</span>
                        <span>{`(`}</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">this.</span>
                        <span className="me-2 ">hardWorker</span>
                        <span className='text-blue-100'>&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">this.</span>
                        <span className="me-2 ">problemSolver</span>
                        <span className='text-blue-100'>&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">this.</span>
                        <span className="me-2">skills.length</span>
                        <span className="me-2 text-blue-100">&gt;=</span>
                        <span className="text-red-500">10</span>
                    </div>
                    <div><span className="ms-5 me-2 ">{`);`}</span></div>
                    <div><span className="ms-4">{`};`}</span></div>
                    <div><span>{`};`}</span></div>
                </code>
            </div>
        </div>
    )
}

export default HeroRight;
