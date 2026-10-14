import Button from '../components/common/Button/Button'
import Card from '../components/common/Card/Card'
import Input from '../components/common/Input/Input'

const Dashboard = () => {
    return (
        <div>
            <div className="py-3 d-flex justify-content-between align-items-center">
                <h3 className='fs-5'>Dashboard</h3>
                <div className='d-flex align-items-center gap-2'>
                    <Button variant='success' type='button' size='sm' className='px-4'> Add New </Button>
                     <Button variant='primary' type='button' size='sm' className='px-4'> Edit</Button>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Merchants" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Transactions" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Users" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Settlements" >
                        <h5 className='mb-0 pb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
               
            </div>

            <div className="row mt-3">
                <div className="col-6">
                    <Input type='text' name='name' label='Merchant Name' required placeholder='Merchant Name'/>
                </div>
            </div>

            <div className="row g-3">
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Merchants" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Transactions" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Users" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Settlements" >
                        <h5 className='mb-0 pb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
               
            </div>

            <div className="row mt-3">
                <div className="col-6">
                    <Input type='text' name='name' label='Merchant Name' required placeholder='Merchant Name'/>
                </div>
            </div>


            <div className="row g-3">
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Merchants" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Transactions" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Users" >
                        <h5 className='mb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <Card title="Total Settlements" >
                        <h5 className='mb-0 pb-0 hs-5'>10,000</h5>
                    </Card>
                </div>
               
            </div>

            <div className="row mt-3">
                <div className="col-6">
                    <Input type='text' name='name' label='Merchant Name' required placeholder='Merchant Name'/>
                </div>
            </div>


            
        </div>
    )
}

export default Dashboard