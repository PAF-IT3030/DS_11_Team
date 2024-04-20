import {Button, Modal, ModalBody, ModalContent, ModalOverlay} from '@chakra-ui/react'
import {BsThreeDots} from 'react-icons/bs'
import CommentsCard from './CommentsCard';

const CommentModal = (onClose, isOpen) => {
  return (
    <div>
        <Modal size = {'4xl'} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className = 'flex h-[75vh]'>
              <div className = 'w-[45%] flex flex-col justify-center'>
                  <img className="max-h-full w-full" src='https://www.google.com/imgres?q=meal%20kit&imgurl=https%3A%2F%2Fm.kedglobal.com%2Fdata%2Fked%2Fimage%2F2021%2F07%2F29%2Fked202107290027.jpg&imgrefurl=https%3A%2F%2Fwww.kedglobal.com%2Fthe-deep-dive-%2FnewsView%2Fked202107290006&docid=0FUKQMDChB-fyM&tbnid=qBsNajtsHqeBuM&vet=12ahUKEwilsqPJxNCFAxV9yTgGHQ-VAv4QM3oECGgQAA..i&w=2000&h=1311&hcb=2&ved=2ahUKEwilsqPJxNCFAxV9yTgGHQ-VAv4QM3oECGgQAA' alt='' />
              </div>
              <div className = 'w-[55%] pl-10'>
                <div className = 'flex justify-between items-center py-5'>
                  <div className = 'flex items-center'>
                    <div>
                    <img className="h-9 w-9 rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s' alt='' />
                    </div>
                  </div>
                  <div className = 'ml-2'>
                      <p>Username</p>
                  </div>
                </div>
                <BsThreeDots/>
              </div>
              <hr />
              <div>
                  {[1,1,1,1].map((item, index) => <CommentsCard key={index}/>)}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal;