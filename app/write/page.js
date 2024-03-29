export default function Write() {
    return(
        <div>
            <h4>날짜가져오기</h4>
            <form action='/api/date' method="GET">
                <button type='submit'>버튼</button>
            </form>
            
            <h4>리스트 가져오기</h4>
            <form action='/api/post_list' method="GET">
                <button type='submit'>버튼</button>
            </form>
            <div className="p-20">
                <h4>글발행하기</h4>
                <form action='/api/post_list' method="POST">
                    <input name='title' placeholder="글제목"/>
                    <input name='content' placeholder="글 내용"/>
                    <button type='submit'>저장</button>
                </form>
            </div>
            
        </div>
    )
}